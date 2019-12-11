export class Search {
  public queryField: string;
  public querVop: string;
  public queryVal: string;
  public collSel: string;
  public limit: number;
  public offset: number;
  public expand: string;
  public filters: string;

  constructor(
    queryField: string,
    querVop: string,
    queryVal: string,
    limit: number,
    offset: number,
    expand: string,
    filters: string,
    collSel?: string
  ) {
    this.queryField = queryField;
    this.querVop = querVop;
    this.queryVal = queryVal;
    this.collSel = collSel;
    this.limit = limit;
    this.offset = offset;
    this.expand = expand;
    this.filters = filters;
  }
}

/*
query_field%5B%5D:dc.title
query_op%5B%5D:contains
query_val%5B%5D:estudo
collSel%5B%5D:
  limit:100
offset:0
expand:parentCollection%2Cmetadata%2Cbitstreams
filters:none*/
