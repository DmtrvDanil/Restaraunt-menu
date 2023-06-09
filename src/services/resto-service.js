export default class RestoService {
    _apiBase = 'http://localhost:3004';
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error('Jest');
        }
        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource(`/menu/`);
    }
}