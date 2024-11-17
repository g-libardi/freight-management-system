import z from 'zod';

const VehicleTypeValue = z.object({
    id: z.coerce.number().int(),
    name: z.string(),
});

export default VehicleTypeValue;
