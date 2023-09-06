// request请求参数
export interface RequestOptions {
    url?: any;
    proxy?: boolean;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | undefined;
    params?: any;
    data?: any;
}
