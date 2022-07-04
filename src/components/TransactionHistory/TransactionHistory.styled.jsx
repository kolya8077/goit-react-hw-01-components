import styled from '@emotion/styled';

export const Table = styled.table`
  border-spacing: 0;

`;

export const TitleTr = styled.thead`
  background-color: lightblue;
`;

export const TitleTrr = styled.tr``;

export const TitleTh = styled.th`
  :first-of-type {
    border-radius: 5px 0 0 0;
  }
  :last-of-type {
    border-radius: 0 5px 0 0;
  }
  width: 300px;
  height: 30px;

  :not(:last-child) {
    border-right: 1px solid #fff;
  }
`;
export const ItemTr = styled.tr`
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border: 5px;

  :nth-of-type(odd) {
    background-color: #fff;
  }

  :nth-of-type(even) {
    background-color: #f3f3f3;
  }

  :last-of-type {
    border-radius: 5px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  :nth-last-of-type(-n + 1) td {
    border-bottom: 1px solid #ccc;
  }

  :last-of-type td:last-of-type {
    border-radius: 0 0 5px 0;
  }

  :last-of-type td:first-of-type {
    border-radius: 0 0 0 5px;
  }
`;

export const ItemTd = styled.td`
  border-right: 1px solid #ccc;
  text-align: center;
  height: 30px;
  :nth-of-type(1) {
    border-left: 1px solid #ccc;
  }
`;
