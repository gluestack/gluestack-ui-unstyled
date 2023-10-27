import React from 'react';
import type { ComponentStory } from '@storybook/react-native';
import { Text } from '../../../ui-components';
import { ChevronDownIcon } from 'lucide-react-native';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTrigger,
  AccordionIcon,
} from '../../../ui-components';

type MyAccordionStory = ComponentStory<typeof Accordion>;

const AccordionStory: MyAccordionStory = ({}: any) => {
  return (
    <Accordion
      type="single"
      orientation="vertical"
      isCollapsible={false}
      defaultValue={'a'}
    >
      <AccordionItem value="a" isDisabled={true}>
        <AccordionHeader>
          <AccordionTrigger>
            <Text>This is a trigger</Text>
            <AccordionIcon as={ChevronDownIcon} pl="$5" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Text> Content</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            <Text>This is a trigger</Text>
            <AccordionIcon as={ChevronDownIcon} pl="$5" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Text> Content</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionHeader>
          <AccordionTrigger>
            <Text>This is a trigger</Text>
            <AccordionIcon as={ChevronDownIcon} pl="$5" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Text> Content</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="d" isDisabled={false}>
        <AccordionHeader>
          <AccordionTrigger>
            <Text>This is a trigger</Text>
            <AccordionIcon as={ChevronDownIcon} pl="$5" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <Text> Content</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionStory;
