import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import { getRemoteList, editRecord } from './service'


interface UserModelType {
  namespace: 'users',
  state: {},
  reducers: {
    getList: Reducer;
  };
  effects: {
    getRemote: Effect;
    edit: Effect
  };
  subscriptions: {
    setup: Subscription;
  }
}
const UserModel: UserModelType = {
  namespace: 'users',
  state: {},
  reducers: {
    getList(state, { payload }) {
      return payload
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },

  effects: {
    *getRemote(action, { put, call }) {
      const data = yield call(getRemoteList)
      console.log(data)
      yield put({
        type: 'getList',
        payload: data,
      })
    },
    *edit({ payload:{values, id} }, { put, call }) {
      console.log(id,values,"edit--------")
      const data = yield call(editRecord, { id, values })
      console.log(data)

      // const data = yield call(getRemoteList)
      // console.log(data)
      // yield put({
      //   type: 'getList',
      //   payload: data,
      // })
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/users') {
          dispatch({
            type: 'getRemote',
          });
        }
      });
    },
  },
};


export default UserModel;