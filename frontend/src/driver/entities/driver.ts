import z from 'zod';


const Driver = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});


type Driver = z.infer<typeof Driver>;


export default Driver;
