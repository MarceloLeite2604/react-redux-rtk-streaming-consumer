import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dateApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    mode: 'cors'
  }),
  endpoints: (build) => ({
    getDate: build.query<void, void>({
      queryFn() {
        console.log('QueryFn invoked');
        return { data: {} as unknown as void }
      },
      async onCacheEntryAdded(arg, _) {

        const sse = new EventSource('http://localhost:8080/stream/error');

        sse.onopen = () => console.log('Stream connection opened');
        sse.onmessage = e => console.log(e.data);
        sse.onerror = () => {
          console.log('Something went wrong.')
          sse.close();
        }
      },
    }),
  }),
})

export const { useGetDateQuery } = dateApi