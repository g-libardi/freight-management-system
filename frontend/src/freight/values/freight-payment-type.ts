import z from 'zod';


const FreightPaymentTypeValue = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});


export default FreightPaymentTypeValue;
