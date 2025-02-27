// For more details on Manifest Preferences see:
// https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md

type CEP_Host_Name =
  | "PHSP"
  | "PHXS"
  | "IDSN"
  | "AICY"
  | "ILST"
  | "PPRO"
  | "PRLD"
  | "AEFT"
  | "FLPR"
  | "AUDT"
  | "DRWV"
  | "KBRG"
  | "RUSH";

type CEP_Host = {
  name: CEP_Host_Name;
  version: string;
};

export type JSXBIN_MODE = "off" | "copy" | "replace";

type CEF_Command =
  | "--enable-media-stream"
  | "--enable-speech-input"
  | "--persist-session-cookies"
  | "--disable-image-loading"
  | "--disable-javascript-open-windows"
  | "--disable-javascript-close-windows"
  | "--disable-javascript-access-clipboard"
  | "--enable-caret-browsing"
  | "--proxy-auto-detect"
  | "--user-agent"
  | "--disable-application-cache"
  | "--enable-nodejs"
  | "--disable-pinch"
  | "--mixed-context"
  | "--v=0"
  | "--v=1"
  | "--v=2"
  | "--v=3"
  | "--v=4"
  | "--v=5";

type CEP_Panel_Type = "Panel" | "ModalDialog" | "Modeless" | "Custom";

export interface CEP_Panel {
  mainPath: string;
  name: string;
  panelDisplayName: string;
  autoVisible: boolean;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;
  scriptPath?: string;
}

export interface CEP_Extended_Panel extends CEP_Panel {
  id: string;
  iconDarkNormal?: string;
  iconNormal?: string;
  iconDarkNormalRollOver?: string;
  iconNormalRollOver?: string;
  parameters: CEF_Command[];
  type: CEP_Panel_Type;
  width?: number;
  height?: number;
}

export interface CEP_Config {
  port: number;
  servePort: number;
  symlink: "local" | "global";
  startingDebugPort: number;
  version: string;
  id: string;
  displayName: string;
  extensionManifestVersion: number;
  requiredRuntimeVersion: number;
  hosts: CEP_Host[];
  type: CEP_Panel_Type;
  iconDarkNormal?: string;
  iconNormal?: string;
  iconDarkNormalRollOver?: string;
  iconNormalRollOver?: string;
  parameters: CEF_Command[];
  scriptPath?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
  maxHeight?: number;
  minWidth?: number;
  minHeight?: number;

  panels: CEP_Panel[];

  build?: {
    sourceMap?: boolean;
    jsxBin?: JSXBIN_MODE;
  };
  zxp: {
    country: string;
    province: string;
    org: string;
    password: string;
    tsa: string;
    sourceMap?: boolean;
    jsxBin?: JSXBIN_MODE;
  };
  installModules?: string[];
  copyAssets?: string[];
  copyAssetsPath?: any;
}
