import { Device, request } from 'src/data';

export function get(groupid: string, agentid: string, deviceid: string, token: string): Promise<Device> {
  return request.get(`/groups/${groupid}/agents/${agentid}/devices/${deviceid}`, { token }).then(result => (
    new Device(result.device)
  ));
}

export function listByGroup(groupid: string, token: string): Promise<Device[]> {
  return request.get(`/groups/${groupid}/devices`, { token }).then(result => (
    result.devices.map(item => new Device(item))
  ));
}

export function listByAgent(groupid: string, agentid: string, token: string): Promise<Device[]> {
  return request.get(`/groups/${groupid}/agents/${agentid}/devices`, { token }).then(result => (
    result.devices.map(item => new Device(item))
  ));
}
