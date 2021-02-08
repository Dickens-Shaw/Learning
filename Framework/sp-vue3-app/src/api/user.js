/**
 * 用户模块接口请求
 * @author chenmb
 * @since 2020/11/12
 */

import api from '@/utils/api';

/**
 * 根据authId获取用户数据
 * @param  params {authId: string} 授权Id
 * @return 用户列表数据
 */
export async function getList(params) {
  const path = '/user-centre-server/api/user/v1/get_user_by_auth_id.do';
  const data = await api.get(path, params);
  return data?.all;
}
