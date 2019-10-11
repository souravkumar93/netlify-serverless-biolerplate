import { get } from 'lodash';
import React from 'react';
import { useQuery } from "react-apollo";
import { GET_STATUS } from '../../graphql/queries';

export default () => {
  const { loading, data } = useQuery(GET_STATUS);
  if (loading) {
    return 'loading...'
  }
  return <div>Server Status - {get(data, 'getStatus.status')}</div>
}
