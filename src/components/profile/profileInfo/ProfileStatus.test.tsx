import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile component', () => {
    test('status should be in component', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {}} />);
        const root = component.root;
        expect(root.props.status).toBe('it-kamasutra.com');
    });
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {}} />);
        const root = component.root;
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(1);
    });
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {}} />);
        const root = component.root;
        let spans = root.findAllByType('span')
        spans.forEach(span => {
            expect(span.props.children[0]).toEqual('it-kamasutra.com');
        });
    });
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={() => {}} />);
        const root = component.root;
        let span = root.findByType('span')
        span.props.onDoubleClick();
        let input = root.findByType('input')
        expect(input.props.value).toBe('it-kamasutra.com');
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={mockCallback} />);
        const instance = component.root;
        // Проверяем, что компонент содержит проп updateStatus
        expect(instance.props.updateStatus).toBeDefined();
        // Вызываем функцию updateStatus
        instance.props.updateStatus();
        // Проверяем, что функция была вызвана
        expect(mockCallback).toHaveBeenCalled();
    });
});