import { Device, request } from 'src/data';

export function get(groupid: string, agentid: string, deviceid: string, token: string): Promise<Device> {
  const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
  return request.get(url, { token }).then(result => (
    new Device(result.device)
  ));
}

export function update(groupid: string, agentid: string, deviceid: string, data: Partial<Device>, token: string): Promise<Device> {
  const url = `/groups/${groupid}/agents/${agentid}/devices/${deviceid}`;
  return request.put(url, { data, token }).then(result => (
    new Device(result.device)
  ));
}

export function listByGroup(groupid: string, token: string): Promise<Device[]> {
  const url = `/groups/${groupid}/devices`;
  return request.get(url, { token }).then(result => (
    result.devices.map(item => new Device(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, token: string): Promise<Device[]> {
  const url = `/groups/${groupid}/agents/${agentid}/devices`;
  return request.get(url, { token }).then(result => (
    result.devices.map(item => new Device(item))
  ));
}
