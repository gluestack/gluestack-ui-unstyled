import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { AccordionContentText, Divider } from '../../../ui-components';
import { ChevronDownIcon } from 'lucide-react-native';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTrigger,
  AccordionIcon,
  AccordionTitleText,
} from '../../../ui-components';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: any) => {
  return (
    <Accordion
      // isDisabled={true}
      type="multiple"
      // orientation="vertical"
      isCollapsible={true}
      // defaultValue={'a'}
      variant={'filled'}
      size="sm"
    >
      <AccordionItem value="a" isDisabled={true}>
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>This is a trigger</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText> Content</AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider
        sx={{
          _light: {
            bg: '$borderLight300',
          },
          _dark: {
            bg: '$borderDark800',
          },
        }}
      />

      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>This is a trigger</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText> Content</AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider
        sx={{
          _light: {
            bg: '$borderLight300',
          },
          _dark: {
            bg: '$borderDark800',
          },
        }}
      />

      <AccordionItem value="c">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>This is a trigger</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText> Content</AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <Divider
        sx={{
          _light: {
            bg: '$borderLight300',
          },
          _dark: {
            bg: '$borderDark800',
          },
        }}
      />

      <AccordionItem value="d" isDisabled={false}>
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>This is a trigger</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText> Content</AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionStory;
