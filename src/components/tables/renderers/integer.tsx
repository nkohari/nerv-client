import * as React from 'react';
import { CellParams } from 'src/components/tables/framework';
import { format } from 'src/utils';

export default function integer() {
  return (params: CellParams<number>) => {
    return (
      <span>
        {format.integer(params.cellData)}
      </span>
    );
  };
}
