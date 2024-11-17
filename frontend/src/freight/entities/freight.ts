import z from 'zod';
import CargoTypeSchema from '../values/cargo_type';
import Carrier from '@/carrier/entities/carrier';
import Driver from '@/driver/entities/driver';
import VehicleTypeValue from '@/vehicle/values/vehicle-type';
import FreightStatusValue from '../values/freight-status';
import FreightPaymentTypeValue from '../values/freight-payment-type';


const Freight = z.object({
    id: z.coerce.number().int().optional(),
    date: z.coerce.date(),
    price: z.coerce.number(),
    driver: Driver,
    carrier: Carrier,
    vehicle_type: VehicleTypeValue,
    freight_status: FreightStatusValue,
    payment_type: FreightPaymentTypeValue,
    cargo_type: CargoTypeSchema,
});


type Freight = z.infer<typeof Freight>;


export default Freight;
