export class Bitstream {
  public uuid: string;
  public name: string;
  public handle: string;
  public type: string;
  public link: string;
  public description: string;
  public format: string;
  public mimeType: string;
  public sizeBytes: number;
  public retrieveLink: string;

  constructor(
    uuid: string,
    name: string,
    handle: string,
    type: string,
    link: string,
    description: string,
    format: string,
    mimeType: string,
    sizeBytes: number,
    retrieveLink: string
  ) {
    this.link = link;
    this.type = type;
    this.handle = handle;
    this.name = name;
    this.uuid = uuid;
    this.description = description;
    this.format = format;
    this.mimeType = mimeType;
    this.sizeBytes = sizeBytes;
    this.retrieveLink = retrieveLink;
  }
}

/*
{
        "uuid": "55244168-17d1-4a66-a46f-04f3314cc966",
        "name": "Lorem ipsum dolor sit amet.pdf",
        "handle": null,
        "type": "bitstream",
        "expand": [
            "parent",
            "policies",
            "all"
        ],
        "bundleName": "ORIGINAL"
        "description": "Ficheiro exemplo",
        "format": "Adobe PDF",
        "mimeType": "application/pdf",
        "sizeBytes": 525564,
        "parentObject": null,
        "retrieveLink": "/rest/bitstreams/55244168-17d1-4a66-a46f-04f3314cc966/retrieve",
        "checkSum": {
            "value": "66a1a79cc2ca12098ff60bab67221fc2",
            "checkSumAlgorithm": "MD5"
        },
        "sequenceId": 1,
        "policies": null,
        "link": "/rest/bitstreams/55244168-17d1-4a66-a46f-04f3314cc966"
    }*/
