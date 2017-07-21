import * as React from 'react';
import { CellParams } from 'src/components/tables/framework';
import { format } from 'src/utils';

export default function percentage() {
  return (params: CellParams<number>) => {
    return (
      <span>
        {format.percentage(params.cellData, { precision: 0 })}
      </span>
    );
  };
}
