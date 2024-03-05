import { create } from 'zustand';

export type DeviceListType = {
  id: number;
  name: string;
  logoUrl: string;
};

type StoreState = {
  deviceList: DeviceListType[];
  setDeviceList: (items: DeviceListType[]) => void;
};

const useStore = create<StoreState>((set) => ({
  deviceList: [
    {
      id: 0,
      name: 'Turbionaire Senso 25 wifi',
      logoUrl: require('./assets/turbionaire.png')
    }
  ],
  setDeviceList: (items) => set({ deviceList: items })
}));

export default useStore;
