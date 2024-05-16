import { Injectable, InjectionToken } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

export const TOTS_TABLE_DEFAULT_CONFIG = new InjectionToken<TotsTableDefaultConfig>('tots_table_default_config');

@Injectable()
export class TotsTableDefaultConfig {
  /**
   * Message shown when there are no entries in the table
   */
  messageNotFound? : string;

  /**
   * Replaces default mat spinner
   */
  loadingComponent? : any;

  /**
   * Applies to the default initial loading spinner and to the upper and/or lower progress bars
   */
  matColor? : ThemePalette;

  /**
   * @default false
   */
  upperPaginator? : boolean;
  /**
   * @default true
   */
  lowerPaginator? : boolean;

  /**
   * @default false
   */
  upperProgressBar? : boolean;
  /**
   * @default true
   */
  lowerProgressBar? : boolean;
}