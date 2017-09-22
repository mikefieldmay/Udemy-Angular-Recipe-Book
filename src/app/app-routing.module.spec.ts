import { AppRoutingModule } from './app-routing.module';

describe('routes', () => {

    it('should contain a route for /users', () => {
        expect(AppRoutingModule).toContain({ path: 'users', component: UsersComponent });
    });

});
