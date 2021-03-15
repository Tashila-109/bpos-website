export default class APIHelper {
  static SuccessResponse(axiosResponse) {
    return {
      isError: false,
      data: axiosResponse?.data,
      status: axiosResponse?.status,
      statusText: axiosResponse?.statusText,
      totalItems: axiosResponse?.totalItems || axiosResponse?.data?.totalItems || axiosResponse?.data.length || null,
      request: {
        headers: axiosResponse?.config?.headers,
        method: axiosResponse?.config?.method,
        url: axiosResponse?.config?.url,
        body: axiosResponse?.config?.data || null,
      },
    };
  }

  static ErrorResponse(error) {
    const response = {
      isError: true,
      errorMessage: null,
      data: null,
      errorType: '',
      response: null,
      status: error?.status,
      statusText: error?.statusText,
      request: {
        headers: error?.config?.headers,
        method: error?.config?.method,
        url: error?.config?.url,
        body: error?.config?.data || null,
      },
    };

    // filling up extra properties if available
    if (error?.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx. more info: https://github.com/axios/axios
      response.errorType = 'server-response';
      response.response = error?.response;
      response.errorMessage = error?.response?.message;
    } else if (error?.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      response.errorType = 'server-no-response';
      response.response = null;
      response.errorMessage = 'The request was made but no response was received. possible causes are network or CORS issue.';
    } else {
      // Something happened in setting up the request that triggered an Error
      response.errorType = 'client-setup-error';
      response.response = null;
      response.errorMessage = `Something happened in setting up the request that triggered an Error. ${error?.toString()}`;
    }

    // We have to to log the Network Error
    const url = error?.config?.url;
    const tenantCode = error?.config?.headers?.[TenantCodeHeaderKey];
    const correlationToken = error?.config?.headers?.[CorrelationTokenHeaderKey];
    const request = {url, body: error?.config?.data};
    const errorResponse = {
      status: response.response?.status,
      statusText: response.response?.statusText,
      body: response.response?.data,
    };
    const errorMessage = `${response.response?.statusText} - ${url}`;

    return response;
  }
}
