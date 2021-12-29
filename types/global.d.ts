// Types for compiled templates
declare module 'name-that-icon/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-local-storage/adapters/adapter' {
  const copy: any;
  doc;
}

declare module 'ember-local-storage/serializers/serializer' {
  const copy: any;
  doc;
}
