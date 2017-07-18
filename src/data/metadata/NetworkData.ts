import { Identifiable } from 'src/data';

export class NetworkData implements Identifiable {

  id: string;
  time: Date;
  symbol: string;
  algorithm: string;
  blockreward: number;
  blocktime: number;
  networkhashrate: number;

  constructor(data: Partial<NetworkData> = {}) {
    this.id = data.id;
    this.time = new Date(data.time);
    this.symbol = data.symbol;
    this.algorithm = data.algorithm;
    this.blockreward = data.blockreward;
    this.blocktime = data.blocktime;
    this.networkhashrate = data.networkhashrate;
  }

}
