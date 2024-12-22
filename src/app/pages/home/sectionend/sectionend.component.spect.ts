import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionendComponent } from './sectionend.component';

describe('SectionEndComponent', () => {
    let component: SectionendComponent;
    let fixture: ComponentFixture<SectionendComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SectionendComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SectionendComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Add more tests here as needed
});