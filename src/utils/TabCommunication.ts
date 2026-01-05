import pkg from '../../package.json'

export type TabMessageType = 'theme_channel' | 'locales_channel' | 'system_set_channel' | 'user_channel'
export type TabMessageData = {
  type: TabMessageType
  data: any
}

export interface TabMessageCallback {
  (data: TabMessageData): void;
}

export class TabCommunication {
  private isSupported: boolean
  private messageCallback: TabMessageCallback | null
  private storageKey: string
  private bc: BroadcastChannel | null
  private tabId: string

  /**
   * 构造函数
   * @param {string} channelName - 通信频道名称（区分不同通信链路）
   */
  constructor(channelName: string) {
    this.isSupported = typeof window.BroadcastChannel !== 'undefined'
    this.messageCallback = null // 消息回调函数
    this.storageKey = `${pkg.name}_${channelName}` // localStorage 唯一标识（避免冲突）
    this.bc = null
    this.tabId = this.generateUUIDTabId()

    // 初始化对应通信方案
    if (this.isSupported) {
      // 方案1：使用 BroadcastChannel
      this.bc = new window.BroadcastChannel(channelName)
      this.bc.onmessage = (e) => {
        if (e.data && e.data.tabId !== this.tabId) {
          if (this.messageCallback) {
            this.messageCallback(e.data.data)
          }
        }
      }
    } else {
      // 方案2：降级使用 localStorage + storage 事件
      window.addEventListener('storage', this.handleStorageEvent.bind(this))
    }
  }

  /**
   * 生成唯一的Tab ID（格式：'tab_${UUID}'）。|| Generate a unique Tab ID (format: 'tab_${UUID}').
   * @returns {string} 唯一的Tab ID。|| The unique Tab ID.
   */
  private generateUUIDTabId() {
    return 'tab_' + crypto.randomUUID()
  }

  /**
   * storage 事件处理函数（localStorage 方案）
   * @param {StorageEvent} e - storage 事件对象
   */
  private handleStorageEvent(e: StorageEvent): void {
    if (e.key !== this.storageKey) return

    try {
      const message = JSON.parse(e.newValue || 'null')
      if (message && message.tabId !== this.tabId) {
        if (this.messageCallback) {
          this.messageCallback(message.data)
        }
      }
    } catch (err) {
      console.error('消息反序列化失败：', err)
    }
  }

  /**
   * 注册消息接收回调
   * @param {TabMessageCallback} callback - 接收到消息后的回调函数（参数为消息内容）
   */
  onMessage(callback: TabMessageCallback): void {
    if (typeof callback === 'function') {
      this.messageCallback = callback
    } else {
      console.warn('回调函数必须是 Function 类型')
    }
  }

  /**
   * 发送消息
   * @param data - 要发送的消息（支持任意可序列化类型：对象、数组、字符串等）
   */
  postMessage(data: TabMessageData): void {
    if (this.isSupported && this.bc) {
      // 方案1：BroadcastChannel 直接发送
      this.bc.postMessage({
        tabId: this.tabId,
        data,
      })
    } else {
      // 方案2：localStorage 存储消息（触发 storage 事件）
      try {
        const messageStr = JSON.stringify({
          tabId: this.tabId,
          data,
        })
        // 修改 localStorage 数据（触发其他标签页的 storage 事件）
        localStorage.setItem(this.storageKey, messageStr)
        // 可选：立即移除该 key（避免 localStorage 冗余存储，不影响事件触发）
        // setTimeout(() => localStorage.removeItem(this.storageKey), 0);
      } catch (err) {
        console.error('消息序列化或存储失败：', err)
      }
    }
  }

  /**
   * 销毁通信实例（释放资源）
   */
  close(): void {
    if (this.isSupported && this.bc) {
      this.bc.close()
      this.bc = null
    } else {
      window.removeEventListener('storage', this.handleStorageEvent.bind(this))
    }
    this.messageCallback = null
  }
}

export default new TabCommunication(`tab_channel`)
