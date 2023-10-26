import { createAccordion } from '@gluestack-ui/accordion';
import {
  Root,
  Item,
  Header,
  Trigger,
  Icon,
  Content,
} from './styled-components';

export const Accordion = createAccordion({
  Root,
  Item,
  Header,
  Trigger,
  Icon,
  Content,
});

export const AccordionItem = Accordion.Item;
export const AccordionHeader = Accordion.Header;
export const AccordionTrigger = Accordion.Trigger;
export const AccordionIcon = Accordion.Icon;
export const AccordionContent = Accordion.Content;
