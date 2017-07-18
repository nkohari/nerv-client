import { Collection, NetworkData } from 'src/data';

export class NetworkDataCollection extends Collection<NetworkData> {

  for(symbol: string): NetworkData {
    return this.find(item => item.symbol === symbol);
  }

}
