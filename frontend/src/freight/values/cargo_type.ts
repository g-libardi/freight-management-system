import z from 'zod';


const CargoTypeValue = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});


export default CargoTypeValue;
