import apiClient from '@/shared/clients/api';
import Freight from '../entities/freight';

const path = '/freight';

const FreightRepository = {
    async query() {
        const res = await apiClient.get(path);
        const parsed = Freight.array().parse(res.data);
        console.log(parsed);
        return parsed;
    },

    async create(data: Freight) {
        const parsed = Freight.omit({"id": true}).parse(data);
        const res = await apiClient.post<Freight>(path, parsed);
        const newParsed = Freight.parse(res.data);
        return newParsed;
    },

    async update(data: Freight) {
        const id = Freight.pick({"id": true}).parse(data);
        const parsed = Freight.omit({"id": true}).parse(data);
        const res = await apiClient.put<Freight>(`${path}/${id}`, parsed);
        const newParsed = Freight.parse(res.data);
        return newParsed;
    },

    async remove(id: number) {
        await apiClient.delete(`${path}/${id}`);
    }
}

export default FreightRepository;
