/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

export interface MetadataResource {
  /**
   * This is a MetadataResource resource
   */
  readonly resourceType: 'MetadataResource';

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  language?: string;

  text?: Narrative;

  contained?: Resource[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  url?: string;

  version?: string;

  name?: string;

  title?: string;

  status?: string;

  experimental?: boolean;

  date?: string;

  publisher?: string;

  contact?: ContactDetail[];

  description?: string;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];
}
