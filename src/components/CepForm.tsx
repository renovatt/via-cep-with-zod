'use client'

import { useCep } from '@/hook/useCep'

const CepForm = () => {
    const { handleSubmit, handleFormSubmit, register, errors } = useCep()

    return (
        <section className='m-auto'>
            <h2>Cep</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}
                className='flex flex-col'
            >
                <input
                    type="text"
                    maxLength={9}
                    placeholder='CEP'
                    {...register('address.zipCode')}
                />
                {errors.address?.zipCode?.message && (
                    <p>{errors.address.zipCode.message}</p>)}

                <input
                    type="text"
                    placeholder='Rua'
                    {...register('address.street')}
                />
                {errors.address?.street?.message && (
                    <p>{errors.address.street.message}</p>)}

                <input
                    type="text"
                    maxLength={9}
                    placeholder='CEP'
                    {...register('address.number')}
                />
                {errors.address?.number?.message && (
                    <p>{errors.address.number.message}</p>)}

                <input
                    type="text"
                    placeholder='Bairro'
                    {...register('address.district')}
                />
                {errors.address?.district?.message && (
                    <p>{errors.address.district.message}</p>)}

                <input
                    type="text"
                    placeholder='Estado'
                    {...register('address.state')}
                />
                {errors.address?.state?.message && (
                    <p>{errors.address.state.message}</p>)}

                <input
                    type="text"
                    placeholder='Cidade'
                    {...register('address.city')}
                />
                {errors.address?.city?.message && (
                    <p>{errors.address.city.message}</p>)}

                <input
                    type="text"
                    placeholder='Complemento'
                    {...register('address.complement')}
                />
                {errors.address?.complement?.message && (
                    <p>{errors.address.complement.message}</p>)}

                <input type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default CepForm