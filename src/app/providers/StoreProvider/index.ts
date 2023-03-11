import { StoreProvider } from './ui/StoreProvider';
import type { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema, ThunkConfig, ReduxStoreWithManager, StateSchemaKey,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkConfig,
    ReduxStoreWithManager,
    StateSchemaKey,
};
