import z from 'zod';


const FreightStatusValue = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});


export default FreightStatusValue;
