// Adpated from : https://dev.to/istealersn_dev/patterns-for-api-communication-in-frontend-applications-11g1

class ApiClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>

  constructor(baseURL: string) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const config: RequestInit = {
      headers: { ...this.defaultHeaders, ...options.headers },
      ...options,
    }

    let response

    try {
      response = await fetch(url, config)
    } catch (error) {
      if (error instanceof Error) {
        throw new HTTPError(`Network error: ${error.message}`)
      }
      throw new HTTPError('Unknown network error')
    }

    if (response?.ok) {
      return response.json()
    }

    const errorData = await response.json().catch(() => ({}))
    throw new HTTPError(
      errorData.message || `HTTP ${response.status}: ${response.statusText}`,
      response.status,
      response,
    )
  }

  /**
   * HTTP Get
   * @param endpoint
   * @returns
   */

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' })
  }

  /**
   * HTTP Post
   * @param endpoint
   * @param data
   * @returns
   */
  async post<T>(endpoint: string, data: unknown): Promise<T> {
    return this.request<T>(endpoint, { method: 'POST', body: JSON.stringify(data) })
  }
}

class HTTPError extends Error {
  constructor(
    message: string,
    private status: number | null = null,
    private reponse: Response | null = null,
  ) {
    super(message)
    this.name = 'HTTPError'
  }
}

export const apiClient = new ApiClient(import.meta.env.VITE_API_URL)
