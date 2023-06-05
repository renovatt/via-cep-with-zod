'use client'

import { useCep } from '@/hook/useCep'

const CepForm = () => {
    const { handleSubmit, handleFormSubmit, register, errors } = useCep()

    return (
        <section className='m-auto'>
            <h2 className='text-center mb-2'>Informe o seu CEP</h2>
            <form onSubmit={handleSubmit(handleFormSubmit)}
                className="flex flex-col gap-4 w-full max-w-xs"
            >
                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    maxLength={9}
                    placeholder='CEP'
                    {...register('address.zipCode')}
                />
                {errors.address?.zipCode?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.zipCode.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    placeholder='Rua'
                    {...register('address.street')}
                />
                {errors.address?.street?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.street.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    maxLength={9}
                    placeholder='n°'
                    {...register('address.number')}
                />
                {errors.address?.number?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.number.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    placeholder='Bairro'
                    {...register('address.district')}
                />
                {errors.address?.district?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.district.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    placeholder='Estado'
                    {...register('address.state')}
                />
                {errors.address?.state?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.state.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    placeholder='Cidade'
                    {...register('address.city')}
                />
                {errors.address?.city?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.city.message}</p>)}

                <input
                    className='flex-1 rounded border border-zinc-300 shadow-sm px-3 py-2 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-500'
                    type="text"
                    placeholder='Complemento'
                    {...register('address.complement')}
                />
                {errors.address?.complement?.message && (
                    <p className="text-xs text-red-500 mt-1 ml-2">{errors.address.complement.message}</p>)}

                <input
                    className="bg-violet-500 text-white rounded px-3 h-10 font-semibold text-sm hover:bg-violet-600 cursor-pointer"
                    type="submit"
                    value="Enviar" />
            </form>
        </section>
    )
}

export default CepForm