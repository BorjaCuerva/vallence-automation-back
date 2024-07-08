import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeHeroComponent extends Schema.Component {
  collectionName: 'components_home_hero_components';
  info: {
    displayName: 'hero_component';
    icon: 'wheelchair';
    description: '';
  };
  attributes: {
    hero_title: Attribute.String & Attribute.Required;
    hero_description: Attribute.Text;
    hero_button: Attribute.String;
    hero_image: Attribute.Media<'images'>;
  };
}

export interface HomeListComponent extends Schema.Component {
  collectionName: 'components_home_list_components';
  info: {
    displayName: 'list_component';
    icon: 'emotionUnhappy';
  };
  attributes: {
    list_title: Attribute.String;
    list_description: Attribute.Text;
    list_item: Attribute.Component<'home.list-item', true> & Attribute.Required;
  };
}

export interface HomeListItem extends Schema.Component {
  collectionName: 'components_home_list_items';
  info: {
    displayName: 'list_item';
    icon: 'archive';
  };
  attributes: {
    item_icon: Attribute.Media<'images'> & Attribute.Required;
    item_title: Attribute.String & Attribute.Required;
    item_description: Attribute.Text & Attribute.Required;
  };
}

export interface HomeRepeatableComponent extends Schema.Component {
  collectionName: 'components_home_repeatable_components';
  info: {
    displayName: 'repeatable_component';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    section: Attribute.Component<'home.section', true>;
  };
}

export interface HomeSection extends Schema.Component {
  collectionName: 'components_home_sections';
  info: {
    displayName: 'Section';
    icon: 'layer';
  };
  attributes: {
    section_image: Attribute.Media<'images'> & Attribute.Required;
    section_title: Attribute.String & Attribute.Required;
    section_description: Attribute.Text;
    section_item: Attribute.Component<'home.list-item', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero-component': HomeHeroComponent;
      'home.list-component': HomeListComponent;
      'home.list-item': HomeListItem;
      'home.repeatable-component': HomeRepeatableComponent;
      'home.section': HomeSection;
    }
  }
}
