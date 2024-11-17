import z from 'zod';


const Carrier = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});


type Carrier = z.infer<typeof Carrier>;


export default Carrier;
