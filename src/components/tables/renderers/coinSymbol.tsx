import * as React from 'react';
import { CellParams } from 'src/components/tables/framework';

export default function coinSymbol() {
  return (params: CellParams<string>) => {
    return (
      <span>
        {params.cellData || '-'}
      </span>
    );
  };
}
