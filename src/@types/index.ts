import { z } from "zod"
import { schemaForm } from "@/zod";

export type FormTypeProps = z.infer<typeof schemaForm>
export type AddressProps = {
logradouro: string;
localidade: string;
bairro: string;
uf: string;
complemento: string;
}