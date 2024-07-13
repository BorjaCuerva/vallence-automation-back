import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeFaqComponent extends Schema.Component {
  collectionName: 'components_home_faq_components';
  info: {
    displayName: 'FAQ_component';
    icon: 'discuss';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    faq_item: Attribute.Component<'home.list-item', true>;
  };
}

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
    description: '';
  };
  attributes: {
    item_title: Attribute.String & Attribute.Required;
    item_description: Attribute.Text;
    item_image: Attribute.Media<'images'>;
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

export interface HomeStepsComponent extends Schema.Component {
  collectionName: 'components_home_steps_components';
  info: {
    displayName: 'steps_component';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images'>;
    step_item: Attribute.Component<'home.list-item', true>;
  };
}

export interface HomeWidgetComponent extends Schema.Component {
  collectionName: 'components_home_widget_components';
  info: {
    displayName: 'widget_component';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    widget_item: Attribute.Component<'home.list-item', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.faq-component': HomeFaqComponent;
      'home.hero-component': HomeHeroComponent;
      'home.list-component': HomeListComponent;
      'home.list-item': HomeListItem;
      'home.repeatable-component': HomeRepeatableComponent;
      'home.section': HomeSection;
      'home.steps-component': HomeStepsComponent;
      'home.widget-component': HomeWidgetComponent;
    }
  }
}
