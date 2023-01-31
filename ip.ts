import { NetworkInterfaceInfo, networkInterfaces } from 'node:os'

export function hostIps (): Record<string, NetworkInterfaceInfo[]> {
  const results: Record<string, NetworkInterfaceInfo[]> = {}

  const ifs = networkInterfaces()

  for (const [name, networks] of Object.entries(ifs)) {
    if (!networks) continue
    for (const network of networks) {
      if (network.family !== 'IPv4' || network.internal) continue
      if (!results[name]) {
        results[name] = []
      }

      results[name].push(network)
    }
  }

  return results
}

const networkInterface = Object.values(hostIps())[0][0]
console.log(networkInterface.address)
