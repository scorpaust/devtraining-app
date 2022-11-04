import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

describe('CourseService', () => {
  let service: CoursesService;
  let id;
  let date;

  beforeEach(async () => {
    service = new CoursesService();
    id = 'bab8ed4d-0b67-4659-84a8-c703e2283043';
    date = new Date();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      created_at: date,
      tags: expectedOutputTags,
    };

    const mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findOne: jest.fn(),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();

    expect(expectedOutputCourse).toStrictEqual(newCourse);
  });

  it('should list courses', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourses = [
      {
        id,
        name: 'Nestjs Fundamentals Course',
        description: 'Nestjs Fundamentals Course - Test',
        created_at: date,
        tags: expectedOutputTags,
      },
    ];

    const mockCourseRepository = {
      findAll: jest
        .fn()
        .mockReturnValue(Promise.resolve(expectedOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourses)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toHaveBeenCalled();

    expect(courses).toStrictEqual(expectedOutputCourses);
  });

  it('should get a specific course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      created_at: date,
      tags: expectedOutputTags,
    };

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();

    expect(expectedOutputCourse).toStrictEqual(course);
  });

  it('should update a course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      created_at: date,
      tags: expectedOutputTags,
    };

    const mockCourseRepository = {
      update: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    const mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findOne: jest.fn(),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDto: UpdateCourseDto = {
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();

    expect(expectedOutputCourse).toStrictEqual(course);
  });

  it('should delete a course', async () => {
    const expectedOutputTags = [
      {
        id,
        name: 'nestjs',
        created_at: date,
      },
    ];

    const expectedOutputCourse = {
      id,
      name: 'Nestjs Fundamentals Course',
      description: 'Nestjs Fundamentals Course - Test',
      created_at: date,
      tags: expectedOutputTags,
    };

    const mockCourseRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectedOutputCourse)),
    };

    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCourseRepository;

    const course = await service.remove(id);

    expect(mockCourseRepository.remove).toHaveBeenCalled();

    expect(expectedOutputCourse).toStrictEqual(course);
  });
});
