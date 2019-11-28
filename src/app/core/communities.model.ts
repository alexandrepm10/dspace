export class Communities {
  constructor(
    public uuid: string,
    public name: string,
    public handle: string,
    public type: string,
    public link: string,
    public countItems: number,
    public introductoryText: string,
    public shortDescription: string
  ) {
  }
}

// <communities>
//   <community>
//     <link>
// /rest/communities/c098fbef-0407-45c8-9b5b-eed05c21743c
// </link>
// <expand>parentCommunity</expand>
// <expand>collections</expand>
// <expand>subCommunities</expand>
// <expand>logo</expand>
// <expand>all</expand>
// <handle>123456789/58</handle>
// <name>Geral</name>
// <type>community</type>
// <UUID>c098fbef-0407-45c8-9b5b-eed05c21743c</UUID>
// <copyrightText/>
// <countItems>374</countItems>
// <introductoryText/>
// <shortDescription/>
// <sidebarText/>
// </community>
// </communities>
