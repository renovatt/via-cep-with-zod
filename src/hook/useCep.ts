import { schemaForm } from "@/zod"
import { useForm } from "react-hook-form"
import { useCallback, useEffect } from "react"
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressProps, FormTypeProps } from "@/@types"
import { handleCepApi } from "@/services"

export const useCep = () => {
    const {
        handleSubmit,
        register,
        watch,
        setValue,
        formState: { errors }
    } = useForm<FormTypeProps>({
        mode: "all",
        criteriaMode: "all",
        resolver: zodResolver(schemaForm),
        defaultValues: {
            address: {
                city: "",
                complement: "",
                district: "",
                number: "",
                state: "",
                street: "",
                zipCode: ""
            }
        }
    })

    const zipCode = watch('address.zipCode')

    const handleFormSubmit = (data: FormTypeProps) => {
        console.log(data)
    }

    const handleSetData = useCallback((data: AddressProps) => {
        setValue('address.city', data.localidade)
        setValue('address.state', data.uf)
        setValue('address.street', data.logradouro)
        setValue('address.district', data.bairro)
        setValue('address.complement', data.complemento)
    }, [setValue])

    const handleFetchAdress = useCallback(async (zipCode: string) => {
        const { response } = await handleCepApi(zipCode)
        if (response) handleSetData(response!)
    }, [handleSetData])

    useEffect(() => {
        if (zipCode.length !== 9) return;
        setValue("address.zipCode", zipCode)
        handleFetchAdress(zipCode)
    }, [handleFetchAdress, setValue, zipCode])

    return {
        errors,
        register,
        handleSubmit,
        handleFormSubmit
    }
}