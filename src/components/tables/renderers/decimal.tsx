import * as React from 'react';
import { CellParams } from 'src/components/tables/framework';
import { format } from 'src/utils';

export default function decimal(precision: number) {
  return (params: CellParams<number>) => {
    return (
      <span>
        {format.decimal(params.cellData, { precision })}
      </span>
    );
  };
}
