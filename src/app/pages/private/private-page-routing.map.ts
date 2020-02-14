import { privateAdminRoutes } from './admin/private-admin-pages-routing.map';
import { privateCommonRoutes } from './common/private-common-pages-routing.map';

export const privatePagesRoutes = {
  common: privateCommonRoutes,
  admin: privateAdminRoutes,
}
