import { AddressProps } from "@/@types";

export const handleCepApi = async (zipCode: string) => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`)
        const json = await response.json();

        if (response.ok) {
            return { response: json as AddressProps }
        } else {
            throw new Error(json.error)
        }
    } catch (error: any) {
        return { error: error.message }
    }
}
