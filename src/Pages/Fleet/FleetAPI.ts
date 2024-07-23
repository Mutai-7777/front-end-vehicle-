import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { prodUrl } from '../../utils/utils';

interface Fleet {
    fleet_id: number;
    vehicle_id: number;
    acquisition_date: string;
    depreciation_rate: string;
    current_value: string;
    maintenance_cost: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  
export const fleetApi = createApi({
  reducerPath: 'fleetApi',
  baseQuery: fetchBaseQuery({ baseUrl: prodUrl }),
  endpoints: (builder) => ({
    fetchFleets: builder.query<Fleet[], void>({
      query: () => '/fleet',
    }),
    createFleet: builder.mutation<Fleet, Partial<Fleet>>({
      query: (newFleet) => ({
        url: '/fleet',
        method: 'POST',
        body: newFleet,
      }),
    }),
  }),
});

export const { useFetchFleetsQuery,
     useCreateFleetMutation } : any = fleetApi;

